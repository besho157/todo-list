import { useEffect } from "react";

export const useGoogleOneTap = () => {
  useEffect(() => {
    const loadGoogleOneTap = () => {
      // @ts-expect-error
      window.google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID", // حط Client ID بتاعك هنا
        callback: (response: { credential: string; select_by: string }) => {
          const token = response.credential;

          // ابعت التوكن للباك اند (توجيه أو API)
          window.location.href = `http://localhost:3000/auth/google?token=${token}`;
        },
        auto_select: false,
        cancel_on_tap_outside: false,
      });

      // @ts-expect-error
      window.google.accounts.id.prompt(); // بيظهر البوكس تلقائيًا
    };

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = loadGoogleOneTap;
    document.body.appendChild(script);
  }, []);
};
