import React, { useState, useEffect } from "react";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration";

export default function Update() {
  useEffect(() => {
    serviceWorkerRegistration.register({
      onUpdate: (registration) => {
        setShowSnackBar(true);
        setHide(false);
      },
      onSuccess: (registration) => {
        registration.ready.then(async () => {
          if ("periodicSync" in registration) {
            try {
              await registration.periodicSync.register("content-sync", {
                minInterval: 24 * 60 * 60 * 1000 * 2, //update tout les deux jours
              });
            } catch (error) {
              console.log(
                "Quoi ? tu utilise un vieux navigateur ? GRRRR",
                error
              );
            }
          }
        });
      },
    });
    // eslint-disable-next-line
  }, []);
  const [ShowSnackBar, setShowSnackBar] = useState(false);
  const [hide, setHide] = useState(true);

  const reload = () => {
    setShowSnackBar(false);
    if ("serviceWorker" in navigator) {
      // Register a service worker hosted at the root of the
      // site using the default scope.
      navigator.serviceWorker.register("/sw.js").then(
        (registration) => {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        },
        (error) => {
          console.log("Service worker registration failed:", error);
        }
      );
    } else {
      console.log("Service workers are not supported.");
    }
    window.location.reload(true);
  };
  useEffect(() => {
    if (hide === false) {
      setShowSnackBar(true);
      setHide(true);
      setTimeout(() => {
        setShowSnackBar(false);
      }, 8000);
    }
  }, [hide]);
  return (
    <div id="snackbar" className={ShowSnackBar ? "show-bar" : ""}>
      <p>A new version of the app is available</p>
      <button onClick={reload}> Reload? </button>
      <button onClick={() => setShowSnackBar(false)}> Later</button>
    </div>
  );
}
