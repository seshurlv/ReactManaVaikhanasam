import React, { useState, useEffect } from 'react';
import { Button, Alert } from 'reactstrap';

function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstall(false);
    }
  };

  if (!showInstall) return null;

  return (
    <Alert color="info" className="install-prompt">
      <div className="d-flex justify-content-between align-items-center">
        <span>Install Mana Vaikhanasam app for better experience!</span>
        <div>
          <Button 
            color="primary" 
            size="sm" 
            className="mr-2"
            onClick={handleInstall}
          >
            Install
          </Button>
          <Button 
            color="secondary" 
            size="sm"
            onClick={() => setShowInstall(false)}
          >
            Later
          </Button>
        </div>
      </div>
    </Alert>
  );
}

export default InstallPrompt;