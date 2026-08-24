import { Code, File, Icon, Layers, Terminal, User, Users } from 'lucide-react'
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const TrainingSection = () => {
    const SERVICE_ID = "service_o1jbklr";
    const TEMPLATE_ID = "template_p8h58ur";
    const PUBLIC_KEY = "hcj3DsJ8MfNfUrE8J";

    const [isAfrica, setIsAfrica] = useState(false);
    const [locationLoading, setLocationLoading] = useState(true);

    const AFRICAN_COUNTRIES = new Set([
        "DZ", "AO", "BJ", "BW", "BF", "BI", "CV", "CM", "CF", "TD",
        "KM", "CD", "CG", "CI", "DJ", "EG", "GQ", "ER", "SZ", "ET",
        "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR", "LY", "MG",
        "MW", "ML", "MR", "MU", "MA", "MZ", "NA", "NE", "NG", "RW",
        "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG",
        "TN", "UG", "ZM", "ZW"
    ]);

    useEffect(() => {
        const detectLocation = async () => {
            try {
                const response = await fetch("https://ipapi.co/json/");
                const data = await response.json();

                setIsAfrica(
                    AFRICAN_COUNTRIES.has(data?.country_code)
                );
            } catch (error) {
                console.error("Unable to detect visitor location:", error);

                // Safe fallback for visitors whose location cannot be detected.
                setIsAfrica(false);
            } finally {
                setLocationLoading(false);
            }
        };

        detectLocation();
    }, []);

    const GBP_TO_NGN = 2000;

    const pricing = {
        microsoftIndividual: 40,
        microsoftOrganisation: 250,
        programmingIndividual: 50,
        programmingOrganisation: 350,
        softwareEngineering: 75,
    };

    const formatPrice = (gbp: number) => {
        if (isAfrica) {
            return `₦${(gbp * GBP_TO_NGN).toLocaleString("en-NG")}`;
        }

        return `£${gbp.toLocaleString("en-GB")}`;
    };

    const getPaymentAmount = (gbp: number) => {
        if (isAfrica) {
            // Paystack expects the smallest currency unit.
            // NGN => Kobo
            return gbp * GBP_TO_NGN * 100;
        }

        // GBP => Pence
        return gbp * 100;
    };

    const handlePayment = (
        serviceName: string,
        gbpPrice: number
    ) => {
        const SERVICE_ID = "service_o1jbklr";
        const TEMPLATE_ID = "template_p8h58ur";
        const PUBLIC_KEY = "hcj3DsJ8MfNfUrE8J";
        const email = window.prompt(
            `Enter your email address to pay for ${serviceName}:`
        );

        if (!email) {
            alert("Payment cancelled. An email address is required.");
            return;
        }

        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailIsValid) {
            alert("Please enter a valid email address.");
            return;
        }

        const currency = isAfrica ? "NGN" : "GBP";
        const amount = getPaymentAmount(gbpPrice);

        const referenceNumber =
            `TRAIN-${Date.now()}-${Math.random()
                .toString(36)
                .substring(2, 8)
                .toUpperCase()}`;

        if (!(window as any).payStack) {
            alert(
                "Payment system is currently unavailable. Please try again later."
            );
            return;
        }

        (window as any).payStack.newTransaction({
            key: "pk_live_d2b967eddda456841f504b85549767fc33cc9fd4",

            email,

            amount,

            currency,

            reference: referenceNumber,

            onSuccess: async (res: any) => {
                console.log("Payment successful:", res);

                const templateParams = {
                    name: email.split("@")[0],

                    title: `Payment Successful — ${serviceName}
    
                    Thank you for your payment.
                    
                    Your payment for ${serviceName} has been successfully completed.
                    
                    Payment Details:
                    • Service: ${serviceName}
                    • Amount: ${formatPrice(gbpPrice)}
                    • Currency: ${currency}
                    • Reference: ${referenceNumber}
                    • Paystack Reference: ${res?.reference || "N/A"}
                    • Email: ${email}
                    
                    We will contact you shortly with the next steps.
                    
                    Thank you for choosing Ekene Okoli.`,

                    email,
                };

                try {
                    await emailjs.send(
                        SERVICE_ID,
                        TEMPLATE_ID,
                        templateParams,
                        PUBLIC_KEY
                    );

                    alert(
                        `Payment successful! 🎉
    
    Thank you for purchasing ${serviceName}.
    
    Payment reference:
    ${referenceNumber}
    
    A confirmation email has been sent to ${email}.`
                    );
                } catch (error) {
                    console.error("Email error:", error);

                    alert(
                        `Payment successful! 🎉
    
    Your payment for ${serviceName} was completed.
    
    Reference:
    ${referenceNumber}
    
    However, we could not send the confirmation email automatically. Please keep your payment reference for your records.`
                    );
                }
            },

            onCancel: () => {
                alert("Payment was cancelled.");
            },

            onError: (error: any) => {
                console.error("Payment error:", error);

                alert(
                    `Payment failed.
    
    ${error?.message || "An unexpected payment error occurred."}`
                );
            },
        });
    };
    return (
        <div>
            {/* Pricing / Training Section */}
            <section
                id="pricing"
                className="py-24 bg-slate-950 border-t border-slate-900"
            >
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <div className="max-w-3xl mb-14">

                        <div className="inline-flex items-center gap-2 mb-5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400">
                                Training & Services
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                            Training that matches
                            <span className="block text-slate-500">
                                what you actually need.
                            </span>
                        </h2>

                        <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
                            From Microsoft Office fundamentals to professional software
                            engineering, AI, mobile development, and bespoke software.
                            Choose individual training, organise training for your team,
                            or talk to me about a custom engagement.
                        </p>

                    </div>

                    {/* Currency / Location Notice */}
                    <div className="mb-8 p-5 rounded-2xl border border-slate-800 bg-slate-900/50">

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                            <div>
                                <p className="text-sm font-bold text-white">
                                    Localised pricing
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    Prices are automatically displayed in the currency
                                    available for your region.
                                </p>
                            </div>

                            <div className="flex items-center gap-3">

                                {locationLoading ? (
                                    <span className="text-xs text-slate-500 font-mono">
                                        Detecting location...
                                    </span>
                                ) : (
                                    <span
                                        className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-bold ${isAfrica
                                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                                            : "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                                            }`}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-current" />

                                        {isAfrica
                                            ? "Prices in Nigerian Naira"
                                            : "Prices in British Pounds"}
                                    </span>
                                )}

                            </div>

                        </div>

                        {!locationLoading && (
                            <p className="mt-3 text-[10px] text-slate-600 font-mono">
                                Exchange rate: £1 = ₦2,000
                            </p>
                        )}

                    </div>


                    {/* Training Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {/* =====================================================
                01 Microsoft Individual
            ====================================================== */}
                        <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-emerald-500/30 transition-all">

                            <div className="flex items-center justify-between mb-7">

                                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <File name="file" size={19} />
                                </div>

                                <span className="text-[10px] font-mono text-slate-600">
                                    01
                                </span>

                            </div>

                            <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400">
                                Individual
                            </span>

                            <h3 className="mt-2 text-xl font-extrabold text-white">
                                Microsoft Office
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                Practical one-to-one training in the Microsoft Office tools
                                used every day in education, business, and administration.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {["Word", "Excel", "PowerPoint"].map((item) => (
                                    <span
                                        key={item}
                                        className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-semibold text-slate-400"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-7 pt-5 border-t border-slate-800">

                                <span className="text-2xl font-black text-white">
                                    {formatPrice(pricing.microsoftIndividual)}
                                </span>

                                <span className="text-xs text-slate-500 ml-2">
                                    / hour
                                </span>

                            </div>

                            <button
                                type="button"
                                disabled={locationLoading}
                                onClick={() =>
                                    handlePayment(
                                        "Microsoft Office Individual Training",
                                        pricing.microsoftIndividual
                                    )
                                }
                                className="mt-5 w-full text-center bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white text-xs font-bold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Book Training
                            </button>

                        </div>


                        {/* =====================================================
                02 Microsoft Organisation
            ====================================================== */}
                        <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-purple-500/30 transition-all">

                            <div className="flex items-center justify-between mb-7">

                                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                    <User name="users" size={19} />
                                </div>

                                <span className="text-[10px] font-mono text-slate-600">
                                    02
                                </span>

                            </div>

                            <span className="text-[10px] uppercase tracking-wider font-bold text-purple-400">
                                Organisation
                            </span>

                            <h3 className="mt-2 text-xl font-extrabold text-white">
                                Microsoft Office
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                Team-focused Office training designed around your
                                organisation's workflows, skill levels, and requirements.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {["Word", "Excel", "PowerPoint"].map((item) => (
                                    <span
                                        key={item}
                                        className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-semibold text-slate-400"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-7 pt-5 border-t border-slate-800">

                                <span className="text-2xl font-black text-white">
                                    {formatPrice(pricing.microsoftOrganisation)}
                                </span>

                                <span className="text-xs text-slate-500 ml-2">
                                    / half day
                                </span>

                            </div>

                            <button
                                type="button"
                                disabled={locationLoading}
                                onClick={() =>
                                    handlePayment(
                                        "Microsoft Office Organisation Training",
                                        pricing.microsoftOrganisation
                                    )
                                }
                                className="mt-5 w-full text-center bg-slate-800 hover:bg-purple-500 text-white text-xs font-bold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Enquire for Team Training
                            </button>

                        </div>


                        {/* =====================================================
                03 Programming Individual
            ====================================================== */}
                        <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-emerald-500/30 transition-all">

                            <div className="flex items-center justify-between mb-7">

                                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <Terminal name="terminal" size={19} />
                                </div>

                                <span className="text-[10px] font-mono text-slate-600">
                                    03
                                </span>

                            </div>

                            <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400">
                                Individual
                            </span>

                            <h3 className="mt-2 text-xl font-extrabold text-white">
                                Programming
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                One-to-one programming instruction focused on understanding
                                fundamentals and becoming confident writing real code.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {["JavaScript", "TypeScript", "Python"].map((item) => (
                                    <span
                                        key={item}
                                        className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-semibold text-slate-400"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-7 pt-5 border-t border-slate-800">

                                <span className="text-2xl font-black text-white">
                                    {formatPrice(pricing.programmingIndividual)}
                                </span>

                                <span className="text-xs text-slate-500 ml-2">
                                    / hour
                                </span>

                            </div>

                            <button
                                type="button"
                                disabled={locationLoading}
                                onClick={() =>
                                    handlePayment(
                                        "Programming Individual Training",
                                        pricing.programmingIndividual
                                    )
                                }
                                className="mt-5 w-full text-center bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white text-xs font-bold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Start Learning
                            </button>

                        </div>


                        {/* =====================================================
                04 Programming Organisation
            ====================================================== */}
                        <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-purple-500/30 transition-all">

                            <div className="flex items-center justify-between mb-7">

                                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                    <User name="users" size={19} />
                                </div>

                                <span className="text-[10px] font-mono text-slate-600">
                                    04
                                </span>

                            </div>

                            <span className="text-[10px] uppercase tracking-wider font-bold text-purple-400">
                                Organisation
                            </span>

                            <h3 className="mt-2 text-xl font-extrabold text-white">
                                Programming
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                Structured programming workshops for teams, students,
                                departments, and organisations.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {["JavaScript", "TypeScript", "Python"].map((item) => (
                                    <span
                                        key={item}
                                        className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-semibold text-slate-400"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-7 pt-5 border-t border-slate-800">

                                <span className="text-2xl font-black text-white">
                                    {formatPrice(pricing.programmingOrganisation)}
                                </span>

                                <span className="text-xs text-slate-500 ml-2">
                                    / half day
                                </span>

                            </div>

                            <button
                                type="button"
                                disabled={locationLoading}
                                onClick={() =>
                                    handlePayment(
                                        "Programming Organisation Training",
                                        pricing.programmingOrganisation
                                    )
                                }
                                className="mt-5 w-full text-center bg-slate-800 hover:bg-purple-500 text-white text-xs font-bold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Book Team Training
                            </button>

                        </div>


                        {/* =====================================================
                05 Software Engineering
            ====================================================== */}
                        <div className="group bg-slate-900 border-2 border-emerald-500/30 rounded-2xl p-7 relative">

                            <div className="absolute top-4 right-4 bg-emerald-950 border border-emerald-500/30 text-emerald-400 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider">
                                Popular
                            </div>

                            <div className="flex items-center justify-between mb-7">

                                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <Layers name="layers" size={19} />
                                </div>

                                <span className="text-[10px] font-mono text-slate-600">
                                    05
                                </span>

                            </div>

                            <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400">
                                Professional Development
                            </span>

                            <h3 className="mt-2 text-xl font-extrabold text-white">
                                Software Engineering
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                End-to-end software development covering modern frontend,
                                backend systems, AI integration, and mobile applications.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {["Frontend", "Backend", "AI", "Mobile"].map((item) => (
                                    <span
                                        key={item}
                                        className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-semibold text-slate-400"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-7 pt-5 border-t border-slate-800">

                                <span className="text-2xl font-black text-white">
                                    {formatPrice(pricing.softwareEngineering)}
                                </span>

                                <span className="text-xs text-slate-500 ml-2">
                                    / hour
                                </span>

                            </div>

                            <button
                                type="button"
                                disabled={locationLoading}
                                onClick={() =>
                                    handlePayment(
                                        "Software Engineering Mentorship",
                                        pricing.softwareEngineering
                                    )
                                }
                                className="mt-5 w-full text-center bg-gradient-to-r from-emerald-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white text-xs font-extrabold py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Apply for Mentorship
                            </button>

                        </div>


                        {/* =====================================================
                06 Custom Development
            ====================================================== */}
                        <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-indigo-500/40 transition-all">

                            <div className="flex items-center justify-between mb-7">

                                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                    <Code name="code" size={19} />
                                </div>

                                <span className="text-[10px] font-mono text-slate-600">
                                    06
                                </span>

                            </div>

                            <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-400">
                                Bespoke
                            </span>

                            <h3 className="mt-2 text-xl font-extrabold text-white">
                                Custom Development
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                Need something built rather than taught? Discuss your
                                requirements for a bespoke website, application,
                                automation system, AI solution, or internal platform.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {["Web Apps", "Automation", "AI", "APIs"].map((item) => (
                                    <span
                                        key={item}
                                        className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-semibold text-slate-400"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-7 pt-5 border-t border-slate-800">

                                <span className="text-lg font-black text-white">
                                    Custom Quote
                                </span>

                                <span className="block mt-1 text-xs text-slate-500">
                                    Based on requirements & scope
                                </span>

                            </div>

                            <a
                                href="/contact"
                                className="mt-5 block text-center bg-slate-800 hover:bg-indigo-500 text-white text-xs font-bold py-3 rounded-xl transition-colors"
                            >
                                Discuss Your Project
                            </a>

                        </div>

                    </div>


                    {/* Pricing Note */}
                    <div className="mt-10 grid md:grid-cols-3 gap-4">

                        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                                Individual
                            </span>

                            <p className="mt-2 text-sm text-slate-400">
                                One-to-one sessions tailored completely around your
                                current ability, goals, and pace.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
                            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                                Organisation
                            </span>

                            <p className="mt-2 text-sm text-slate-400">
                                Group sessions for teams and organisations. Final pricing
                                depends on group size, duration, and requirements.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40">
                            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                                Custom
                            </span>

                            <p className="mt-2 text-sm text-slate-400">
                                Bespoke development and training programmes can be
                                designed around your exact requirements.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default TrainingSection