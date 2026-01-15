let currentLang = "pt";

const translations = {
    pt: {
        subtitle: "Cloud Computing • AWS • Estágio / Júnior",
        about_title: "Sobre Mim",
        about_text: "Estudante de Engenharia de Software com foco em Cloud Computing e AWS. Atuo profissionalmente com suporte técnico e busco oportunidade como Cloud Engineer Júnior.",
        exp_title: "Experiência Profissional",
        exp_1: "Customer Support Agent — Influx (2021–Atual)",
        exp_2: "Best Idiomas — Suporte administrativo e tutor de inglês",
        edu_title: "Formação",
        edu_1: "Engenharia de Software — UNOPAR (em andamento)",
        edu_2: "Python Programming — Seattle North College (EUA)",
        skills_title: "Habilidades Técnicas",
        lang_title: "Idiomas",
        lang_pt: "Português — Nativo",
        lang_en: "Inglês — B2"
    },
    en: {
        subtitle: "Cloud Computing • AWS • Internship / Junior",
        about_title: "About Me",
        about_text: "Software Engineering student focused on Cloud Computing and AWS. Currently working with technical support and seeking a Junior Cloud Engineer role.",
        exp_title: "Professional Experience",
        exp_1: "Customer Support Agent — Influx (2021–Present)",
        exp_2: "Best Idiomas — Administrative support and English tutor",
        edu_title: "Education",
        edu_1: "Software Engineering — UNOPAR (in progress)",
        edu_2: "Python Programming — Seattle North College (USA)",
        skills_title: "Technical Skills",
        lang_title: "Languages",
        lang_pt: "Portuguese — Native",
        lang_en: "English — B2"
    }
};

function applyLanguage() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[currentLang][key];
    });
}

function toggleLanguage() {
    currentLang = currentLang === "pt" ? "en" : "pt";
    applyLanguage();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

/* ✅ AQUI ESTÁ A CORREÇÃO PRINCIPAL */
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage();
});
