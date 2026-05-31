// جلب زر التبديل وعنصر الـ body من الصفحة
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// إضافة حدث الضغط على الزر
themeToggleBtn.addEventListener('click', () => {
    // تبديل كلاس dark داخل الـ body
    bodyElement.classList.toggle('dark');
    
    // فحص الوضع الحالي وتغيير نص وأيقونة الزر بناءً عليه
    if (bodyElement.classList.contains('dark')) {
        themeToggleBtn.textContent = '☀️ الوضع الفاتح';
        themeToggleBtn.style.backgroundColor = '#e2e8f0';
        themeToggleBtn.style.color = '#0f172a';
    } else {
        themeToggleBtn.textContent = '🌙 الوضع الليلي';
        themeToggleBtn.style.backgroundColor = '#3b82f6';
        themeToggleBtn.style.color = '#ffffff';
    }
});

