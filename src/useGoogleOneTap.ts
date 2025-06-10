import { useEffect } from "react";

export const useGoogleOneTap = () => {
    useEffect(() => {
        const loadGoogleOneTap = () => {
            // @ts-expect-error: Property 'google' does not exist on type 'Window & typeof globalThis'.
            // التعليق ده بيخلي TypeScript يتجاهل الخطأ اللي بيقول إن 'google' مش موجودة على 'window'.
            // ده طبيعي لأن سكريبت جوجل هو اللي بيضيفها لما بيتحمل.
            window.google.accounts.id.initialize({
                client_id: "YOUR_GOOGLE_CLIENT_ID", // مهم جدًا: لازم تحط الـ Client ID بتاعك هنا
                // هنا بنحدد نوع الـ 'response' بشكل دقيق عشان نحل مشكلة 'any'.
                // 'credential' هو الـ token اللي بنحتاجه، و 'select_by' خاصية تانية ممكن تكون موجودة.
                callback: (response: { credential: string; select_by: string }) => {
                    const token = response.credential;

                    // بعد ما تحصل على الـ token، المفروض ترسله لـ Backend Server بتاعك للتحقق منه.
                    // السطر ده مجرد مثال بسيط لإعادة التوجيه لصفحة معينة في تطبيقك المحلي بالـ token.
                    window.location.href = `http://localhost:3000/auth/google?token=${token}`;
                },
                auto_select: false, // بيمنع ظهور الـ prompt تلقائيًا أول ما الصفحة تحمل
                cancel_on_tap_outside: false, // بيخلي الـ prompt ما يختفيش لو المستخدم ضغط بره
            });

            // @ts-expect-error: Property 'google' does not exist on type 'Window & typeof globalThis'.
            // نفس التعليق هنا عشان نفس سبب الخطأ: TypeScript ما بيشوفش 'window.google' بشكل مباشر.
            window.google.accounts.id.prompt(); // ده اللي بيخلي الـ prompt (نافذة تسجيل الدخول) تظهر للمستخدم
        };

        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.onload = loadGoogleOneTap;
        document.body.appendChild(script);
    }, []);
};
