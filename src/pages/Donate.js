import { useEffect } from 'react';

/* When someone navigates directly to /donate, open the modal immediately */
export default function Donate() {
  useEffect(() => {
    window.dispatchEvent(new Event('openDonationModal'));
  }, []);

  return null;
}
