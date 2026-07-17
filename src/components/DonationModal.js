import { useState, useEffect, useRef } from 'react';
import './DonationModal.css';

/* ─── Constants ───────────────────────────────────────── */
const DONATION_TYPES = [
  { id: 'once',    icon: '💛', title: 'Donate Once',      sub: 'One-time contribution' },
  { id: 'monthly', icon: '🔄', title: 'Monthly Support',  sub: 'Become a recurring donor' },
  { id: 'sponsor', icon: '🌟', title: 'Sponsor a Cause',  sub: 'Support a specific initiative' },
];

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000];

const IMPACT_MAP = {
  500:   { emoji: '🍱', text: 'feeds a family for a week' },
  1000:  { emoji: '📚', text: 'provides school supplies for a child' },
  2500:  { emoji: '🩺', text: 'supports a medical camp visit' },
  5000:  { emoji: '🧥', text: 'sponsors a community program' },
  10000: { emoji: '🌳', text: 'funds large community initiatives' },
};

const PURPOSES = [
  'General Fund', 'Food Distribution', 'Education', 'Medical Camp',
  'Women Empowerment', 'Blanket Drive', 'Tree Plantation',
  'Community Development', 'Emergency Relief', 'Other',
];

const PAYMENT_METHODS = [
  { id: 'upi',     icon: '📱', label: 'UPI' },
  { id: 'credit',  icon: '💳', label: 'Credit Card' },
  { id: 'debit',   icon: '🏦', label: 'Debit Card' },
  { id: 'netbank', icon: '🌐', label: 'Net Banking' },
  { id: 'wallet',  icon: '👛', label: 'Wallet' },
  { id: 'qr',      icon: '📷', label: 'QR Code' },
];

const SIDEBAR_IMPACTS = [
  { emoji: '❤️',  amount: '₹500',    text: 'Feeds one family' },
  { emoji: '📚',  amount: '₹1,000',  text: 'Provides educational kits' },
  { emoji: '🩺',  amount: '₹2,500',  text: 'Supports healthcare camps' },
  { emoji: '🧥',  amount: '₹5,000',  text: 'Funds blanket distribution' },
  { emoji: '🌳',  amount: '₹10,000', text: 'Supports large community initiatives' },
];

const TRUST_BADGES = [
  '✓ Secure Payments',
  '✓ 100% Transparency',
  '✓ Verified NGO',
  '✓ Instant Receipt',
  '✓ Community Impact Reports',
];

const SPONSOR_CAUSES = ['Education', 'Food Drive', 'Medical Camp', 'Blanket Distribution', 'Tree Plantation'];

/* ─── Helpers ─────────────────────────────────────────── */
function fmtINR(n) {
  return '₹' + Number(n).toLocaleString('en-IN');
}

function genId() {
  return 'AR' + Date.now().toString(36).toUpperCase();
}

function saveRecord(record) {
  try {
    const key = 'arise20_donations';
    const list = JSON.parse(localStorage.getItem(key) || '[]');
    list.push(record);
    localStorage.setItem(key, JSON.stringify(list));
  } catch (_) {}
}

/* ─── Confetti ────────────────────────────────────────── */
function Confetti() {
  const COLORS = ['#f97316', '#0f766e', '#34d399', '#fbbf24', '#a78bfa', '#f472b6', '#60a5fa'];
  const pieces = Array.from({ length: 70 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 1.8,
    duration: 2.8 + Math.random() * 2,
    color: COLORS[i % COLORS.length],
    size: 6 + Math.random() * 8,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="confetti-wrap" aria-hidden="true">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            background: p.color,
            width: p.size,
            height: p.size,
            '--rotation': `${p.rotation}deg`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Initial form state ──────────────────────────────── */
const INITIAL = {
  // Step 1
  donationType: 'once',
  amount: 2500,
  customAmount: '',
  isCustom: false,
  purpose: 'General Fund',
  dedication: '',
  dedicateName: '',
  dedicateMessage: '',
  message: '',
  // Step 2
  fullName: '', email: '', phone: '', dob: '',
  occupation: '', city: '', state: '', country: 'India', pincode: '',
  receiptRequired: false, pan: '', orgName: '', gst: '', billingAddress: '',
  // Step 3
  paymentMethod: '', confirmInfo: false, agreeTerms: false, subscribeUpdates: false,
};

/* ═══════════════════════════════════════════════════════
   MAIN MODAL
   ═══════════════════════════════════════════════════════ */
export default function DonationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);          // 1 | 2 | 3 | 'success'
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [donationId, setDonationId] = useState('');
  const [supporterNum] = useState(() => 1500 + Math.floor(Math.random() * 300));
  const bodyRef = useRef(null);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* Escape to close */
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []); // eslint-disable-line

  /* Scroll form area to top on step change */
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [step]);

  if (!isOpen) return null;

  const set = (field, value) => setForm((f) => ({ ...f, [field]: value }));
  const clearErr = (f) => setErrors((e) => { const n = { ...e }; delete n[f]; return n; });

  const effectiveAmount = form.isCustom
    ? Math.max(0, Number(form.customAmount) || 0)
    : form.amount;

  /* Closest preset for impact display */
  const impactKey = PRESET_AMOUNTS.reduce((prev, curr) =>
    Math.abs(curr - effectiveAmount) < Math.abs(prev - effectiveAmount) ? curr : prev
  );
  const currentImpact = IMPACT_MAP[impactKey];

  /* ── Validation ──────────────────────────── */
  function validate() {
    const e = {};
    if (step === 1) {
      if (effectiveAmount < 100) e.amount = 'Minimum donation is ₹100';
    }
    if (step === 2) {
      if (!form.fullName.trim()) e.fullName = 'Full name is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required';
      if (!/^[6-9]\d{9}$/.test(form.phone.replace(/[\s\-+]/g, ''))) e.phone = 'Valid 10-digit mobile number required';
      if (!form.city.trim()) e.city = 'City is required';
      if (!form.state.trim()) e.state = 'State is required';
    }
    if (step === 3) {
      if (!form.paymentMethod) e.paymentMethod = 'Please select a payment method';
      if (!form.confirmInfo) e.confirmInfo = 'Please confirm your information is correct';
      if (!form.agreeTerms) e.agreeTerms = 'Please accept the Terms & Conditions';
    }
    return e;
  }

  function handleNext() {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    if (step < 3) {
      setStep((s) => s + 1);
    } else {
      handleSubmit();
    }
  }

  function handleSubmit() {
    const id = genId();
    setDonationId(id);
    saveRecord({
      donationId: id,
      fullName: form.fullName,
      email: form.email,
      mobile: form.phone,
      city: form.city,
      state: form.state,
      country: form.country,
      donationType: form.donationType,
      donationPurpose: form.purpose,
      donationAmount: effectiveAmount,
      paymentMethod: form.paymentMethod,
      donationStatus: 'Pending',
      transactionId: 'TXN' + Date.now(),
      anonymous: form.dedication === 'anonymous',
      tributeType: form.dedication || null,
      tributeName: form.dedicateName,
      donorMessage: form.message,
      receiptRequired: form.receiptRequired,
      pan: form.pan,
      subscribeUpdates: form.subscribeUpdates,
      dateTime: new Date().toISOString(),
    });
    setStep('success');
  }

  function handleClose() {
    setStep(1);
    setForm(INITIAL);
    setErrors({});
    onClose();
  }

  const progressPct = step === 'success' ? 100 : ((step - 1) / 3) * 100;

  return (
    <div
      className="dm-overlay"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="dm-modal" role="dialog" aria-modal="true" aria-label="Donation Form">

        {/* ── Close ─────────────────────────────── */}
        <button className="dm-close" onClick={handleClose} aria-label="Close modal">✕</button>

        {/* ── Header (hidden on success) ─────────── */}
        {step !== 'success' && (
          <div className="dm-header">
            <span className="dm-heart" aria-hidden="true">❤️</span>
            <h2>Make a Difference Today</h2>
            <p>
              Your contribution helps us provide food, education, healthcare, and
              hope to those in need.
            </p>

            {/* Progress steps */}
            <div className="dm-progress">
              {['Details', 'Your Info', 'Payment'].map((label, i) => (
                <div
                  key={label}
                  className={`dm-step ${step > i + 1 ? 'done' : ''} ${step === i + 1 ? 'active' : ''}`}
                >
                  <div className="dm-step-circle">
                    {step > i + 1 ? '✓' : i + 1}
                  </div>
                  <span>{label}</span>
                  {i < 2 && <div className="dm-step-line" />}
                </div>
              ))}
            </div>

            {/* Progress fill strip */}
            <div className="dm-progress-bar-strip">
              <div className="dm-progress-bar-fill" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        )}

        {/* ── Body ──────────────────────────────── */}
        <div className={`dm-body ${step === 'success' ? 'dm-body--success' : ''}`} ref={bodyRef}>

          {/* Sidebar (desktop only, hidden on success) */}
          {step !== 'success' && (
            <aside className="dm-sidebar">
              <div className="dm-sidebar-card">
                <h4>Your Impact</h4>
                {SIDEBAR_IMPACTS.map((item) => (
                  <div className="dm-impact-row" key={item.amount}>
                    <span className="dm-impact-emoji">{item.emoji}</span>
                    <div>
                      <strong>{item.amount}</strong>
                      <span>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="dm-trust-card">
                {TRUST_BADGES.map((b) => (
                  <div className="dm-trust-item" key={b}>{b}</div>
                ))}
              </div>
            </aside>
          )}

          {/* Form area */}
          <div className="dm-form-area">
            {step === 1 && (
              <Step1
                form={form} set={set} errors={errors} clearErr={clearErr}
                effectiveAmount={effectiveAmount} currentImpact={currentImpact}
              />
            )}
            {step === 2 && (
              <Step2 form={form} set={set} errors={errors} clearErr={clearErr} />
            )}
            {step === 3 && (
              <Step3
                form={form} set={set} errors={errors} clearErr={clearErr}
                effectiveAmount={effectiveAmount}
              />
            )}
            {step === 'success' && (
              <SuccessScreen
                donationId={donationId}
                supporterNum={supporterNum}
                amount={effectiveAmount}
                onClose={handleClose}
              />
            )}
          </div>
        </div>

        {/* ── Footer nav (hidden on success) ────── */}
        {step !== 'success' && (
          <div className="dm-footer">
            {step > 1 && (
              <button className="dm-btn-back" onClick={() => setStep((s) => s - 1)}>
                ← Back
              </button>
            )}
            <div style={{ flex: 1 }} />
            <button className="dm-btn-next" onClick={handleNext}>
              {step === 3 ? '🔒 Proceed to Payment' : 'Continue →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   STEP 1 — Donation Details
   ═══════════════════════════════════════════════════════ */
function Step1({ form, set, errors, clearErr, effectiveAmount, currentImpact }) {
  return (
    <div className="dm-step-content">
      <h3 className="dm-section-title">How would you like to give?</h3>

      {/* Donation Type */}
      <div className="dm-type-grid">
        {DONATION_TYPES.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`dm-type-card ${form.donationType === t.id ? 'active' : ''}`}
            onClick={() => set('donationType', t.id)}
          >
            <span>{t.icon}</span>
            <strong>{t.title}</strong>
            <small>{t.sub}</small>
          </button>
        ))}
      </div>

      {/* Sponsor cause selector */}
      {form.donationType === 'sponsor' && (
        <div className="dm-field">
          <label>Select a Cause *</label>
          <div className="dm-cause-tags">
            {SPONSOR_CAUSES.map((c) => (
              <button
                key={c}
                type="button"
                className={`dm-cause-tag ${form.purpose === c ? 'active' : ''}`}
                onClick={() => set('purpose', c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Amount */}
      <div className="dm-field">
        <label>Choose an Amount *</label>
        {errors.amount && <span className="dm-error">{errors.amount}</span>}
        <div className="dm-amount-grid">
          {PRESET_AMOUNTS.map((a) => (
            <button
              key={a}
              type="button"
              className={`dm-amount-btn ${!form.isCustom && form.amount === a ? 'active' : ''}`}
              onClick={() => { set('amount', a); set('isCustom', false); clearErr('amount'); }}
            >
              {fmtINR(a)}
            </button>
          ))}
          <div className={`dm-amount-btn dm-custom-wrap ${form.isCustom ? 'active' : ''}`}>
            <span>Custom</span>
            <input
              type="number"
              min="100"
              placeholder="₹ Enter amount"
              value={form.customAmount}
              onFocus={() => set('isCustom', true)}
              onChange={(e) => {
                set('customAmount', e.target.value);
                set('isCustom', true);
                clearErr('amount');
              }}
            />
          </div>
        </div>

        {/* Impact message */}
        {effectiveAmount >= 100 && currentImpact && (
          <div className="dm-impact-msg">
            <span>{currentImpact.emoji}</span>
            <p>
              <strong>{fmtINR(effectiveAmount)}</strong> — {currentImpact.text}
            </p>
          </div>
        )}
      </div>

      {/* Purpose (non-sponsor) */}
      {form.donationType !== 'sponsor' && (
        <div className="dm-field">
          <label>Donation Purpose</label>
          <select value={form.purpose} onChange={(e) => set('purpose', e.target.value)}>
            {PURPOSES.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
      )}

      {/* Dedication */}
      <div className="dm-field">
        <label>Dedication (Optional)</label>
        <div className="dm-dedication-row">
          {[
            ['honor',     '🎗️ In Honor Of'],
            ['memory',    '🕊️ In Memory Of'],
            ['anonymous', '🙈 Donate Anonymously'],
          ].map(([val, label]) => (
            <button
              key={val}
              type="button"
              className={`dm-ded-btn ${form.dedication === val ? 'active' : ''}`}
              onClick={() => set('dedication', form.dedication === val ? '' : val)}
            >
              {label}
            </button>
          ))}
        </div>

        {(form.dedication === 'honor' || form.dedication === 'memory') && (
          <div className="dm-dedication-extra">
            <input
              placeholder="Person's Name"
              value={form.dedicateName}
              onChange={(e) => set('dedicateName', e.target.value)}
            />
            <input
              placeholder="Personal message (optional)"
              value={form.dedicateMessage}
              onChange={(e) => set('dedicateMessage', e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Message */}
      <div className="dm-field">
        <label>Message for Our Team (Optional)</label>
        <textarea
          rows={3}
          placeholder="Leave a message for our team..."
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   STEP 2 — Personal Information
   ═══════════════════════════════════════════════════════ */
function Step2({ form, set, errors, clearErr }) {
  /* Reusable field component */
  function Field({ label, field, type = 'text', placeholder, optional }) {
    return (
      <div className="dm-field">
        <label>
          {label}{optional ? ' (Optional)' : ' *'}
        </label>
        <input
          type={type}
          placeholder={placeholder || label}
          value={form[field]}
          className={errors[field] ? 'dm-input-err' : ''}
          onChange={(e) => { set(field, e.target.value); clearErr(field); }}
        />
        {errors[field] && <span className="dm-error">{errors[field]}</span>}
      </div>
    );
  }

  return (
    <div className="dm-step-content">
      <h3 className="dm-section-title">Your Information</h3>

      <div className="dm-grid-2">
        <Field label="Full Name"     field="fullName" placeholder="Your full name" />
        <Field label="Email Address" field="email"    type="email" placeholder="you@example.com" />
      </div>
      <div className="dm-grid-2">
        <Field label="Mobile Number" field="phone" type="tel" placeholder="98765 43210" />
        <Field label="Date of Birth" field="dob"   type="date" optional />
      </div>
      <div className="dm-grid-2">
        <Field label="Occupation" field="occupation" optional />
        <Field label="City"       field="city"       placeholder="Your city" />
      </div>
      <div className="dm-grid-2">
        <Field label="State"   field="state"   placeholder="State" />
        <Field label="Country" field="country" placeholder="Country" />
      </div>
      <div className="dm-grid-2">
        <Field label="Pincode" field="pincode" optional placeholder="Pincode" />
        <div />
      </div>

      {/* Receipt checkbox */}
      <div className="dm-field dm-checkbox-row" style={{ marginTop: 4 }}>
        <input
          type="checkbox"
          id="dm-receipt"
          checked={form.receiptRequired}
          onChange={(e) => set('receiptRequired', e.target.checked)}
        />
        <label htmlFor="dm-receipt">
          I would like to receive a donation receipt (for 80G tax exemption)
        </label>
      </div>

      {/* Tax details */}
      {form.receiptRequired && (
        <div className="dm-tax-section">
          <h4>📋 Tax & Receipt Details</h4>
          <div className="dm-grid-2">
            <div className="dm-field">
              <label>PAN Number *</label>
              <input
                placeholder="ABCDE1234F"
                value={form.pan}
                onChange={(e) => set('pan', e.target.value.toUpperCase())}
              />
            </div>
            <div className="dm-field">
              <label>Organization Name (Optional)</label>
              <input placeholder="Company / Trust name" value={form.orgName} onChange={(e) => set('orgName', e.target.value)} />
            </div>
          </div>
          <div className="dm-grid-2">
            <div className="dm-field">
              <label>GST Number (Optional)</label>
              <input placeholder="GST number" value={form.gst} onChange={(e) => set('gst', e.target.value)} />
            </div>
            <div className="dm-field">
              <label>Billing Address</label>
              <input placeholder="Full billing address" value={form.billingAddress} onChange={(e) => set('billingAddress', e.target.value)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   STEP 3 — Payment + Summary
   ═══════════════════════════════════════════════════════ */
function Step3({ form, set, errors, clearErr, effectiveAmount }) {
  const selectedType = DONATION_TYPES.find((t) => t.id === form.donationType);
  const selectedMethod = PAYMENT_METHODS.find((m) => m.id === form.paymentMethod);

  return (
    <div className="dm-step-content">
      <h3 className="dm-section-title">Choose Payment Method</h3>

      {errors.paymentMethod && (
        <span className="dm-error">{errors.paymentMethod}</span>
      )}

      <div className="dm-payment-grid">
        {PAYMENT_METHODS.map((m) => (
          <button
            key={m.id}
            type="button"
            className={`dm-payment-card ${form.paymentMethod === m.id ? 'active' : ''}`}
            onClick={() => { set('paymentMethod', m.id); clearErr('paymentMethod'); }}
          >
            <span>{m.icon}</span>
            <strong>{m.label}</strong>
          </button>
        ))}
      </div>

      {/* Summary */}
      <div className="dm-summary-card">
        <h4>Donation Summary</h4>
        <div className="dm-summary-rows">
          <div className="dm-summary-row">
            <span>Donation Amount</span>
            <strong>{fmtINR(effectiveAmount)}</strong>
          </div>
          <div className="dm-summary-row">
            <span>Purpose</span>
            <strong>{form.purpose}</strong>
          </div>
          <div className="dm-summary-row">
            <span>Donation Type</span>
            <strong>{selectedType?.title}</strong>
          </div>
          {selectedMethod && (
            <div className="dm-summary-row">
              <span>Payment Method</span>
              <strong>{selectedMethod.icon} {selectedMethod.label}</strong>
            </div>
          )}
          <div className="dm-summary-row">
            <span>Donor</span>
            <strong>{form.fullName || '—'}</strong>
          </div>
          <div className="dm-summary-total">
            <span>Total</span>
            <strong>{fmtINR(effectiveAmount)}</strong>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="dm-secure-row">
        <span>🔒 SSL Secured</span>
        <span>🛡️ RBI Compliant</span>
        <span>✅ 80G Eligible</span>
        <span>🏆 Certified NGO</span>
      </div>

      {/* Consent */}
      <div className="dm-consent-section">
        {[
          { field: 'confirmInfo',      label: 'I confirm that the information provided is correct.' },
          { field: 'agreeTerms',        label: 'I agree to the Terms & Conditions and Privacy Policy.' },
          { field: 'subscribeUpdates',  label: 'Subscribe me to future community updates and impact reports.' },
        ].map(({ field, label }) => (
          <div key={field} className="dm-field dm-checkbox-row">
            <input
              type="checkbox"
              id={`dm-${field}`}
              checked={form[field]}
              onChange={(e) => { set(field, e.target.checked); clearErr(field); }}
            />
            <label htmlFor={`dm-${field}`}>{label}</label>
            {errors[field] && <span className="dm-error" style={{ marginLeft: 28 }}>{errors[field]}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SUCCESS SCREEN
   ═══════════════════════════════════════════════════════ */
function SuccessScreen({ donationId, supporterNum, amount, onClose }) {
  return (
    <div className="dm-success">
      <Confetti />

      {/* Checkmark */}
      <div className="dm-success-check" aria-hidden="true">
        <span>✓</span>
      </div>

      <h2>Thank You! 🎉</h2>
      <p className="dm-success-sub">
        Your generosity helps create lasting change in our community. Every
        rupee reaches those who need it most.
      </p>

      {/* Reference card */}
      <div className="dm-success-ref">
        <div>
          <small>Donation Reference</small>
          <strong>{donationId}</strong>
        </div>
        <div>
          <small>Amount</small>
          <strong>{fmtINR(amount)}</strong>
        </div>
        <div>
          <small>Receipt</small>
          <strong>Sent to email ✓</strong>
        </div>
      </div>

      {/* Supporter badge */}
      <div className="dm-supporter-badge">
        🎊 You became <strong>Supporter #{supporterNum}</strong> of the Arise '20 Foundation!
      </div>

      {/* Share */}
      <div className="dm-success-share">
        <p>Share the love 💛</p>
        <div className="dm-share-btns">
          <button className="dm-share-btn fb" onClick={() => window.open('https://facebook.com', '_blank')}>
            📘 Facebook
          </button>
          <button className="dm-share-btn tw" onClick={() => window.open('https://twitter.com', '_blank')}>
            🐦 Twitter
          </button>
          <button className="dm-share-btn wa" onClick={() => window.open('https://whatsapp.com', '_blank')}>
            💬 WhatsApp
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="dm-success-actions">
        <button className="dm-btn-receipt">⬇️ Download Receipt</button>
        <button className="dm-btn-home" onClick={onClose}>Return Home</button>
      </div>
    </div>
  );
}
