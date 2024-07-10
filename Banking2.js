document.addEventListener('DOMContentLoaded', () => {
    const customerTab = document.getElementById('customer-tab');
    const adminTab = document.getElementById('admin-tab');
    const customerForm = document.getElementById('customer-form');
    const adminForm = document.getElementById('admin-form');
    const customerDashboard = document.getElementById('customer-dashboard');
    const adminDashboard = document.getElementById('admin-dashboard');

    customerTab.addEventListener('click', () => {
        customerTab.classList.add('active');
        adminTab.classList.remove('active');
        customerForm.style.display = 'block';
        adminForm.style.display = 'none';
        customerDashboard.style.display = 'none';
        adminDashboard.style.display = 'none';
    });

    adminTab.addEventListener('click', () => {
        adminTab.classList.add('active');
        customerTab.classList.remove('active');
        adminForm.style.display = 'block';
        customerForm.style.display = 'none';
        customerDashboard.style.display = 'none';
        adminDashboard.style.display = 'none';
    });

    document.getElementById('customerLoginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        customerForm.style.display = 'none';
        customerDashboard.style.display = 'block';
    });

    document.getElementById('adminLoginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        adminForm.style.display = 'none';
        adminDashboard.style.display = 'block';
    });

    document.getElementById('deposit-button').addEventListener('click', () => {
        alert('Deposit button clicked');
    });

    document.getElementById('withdraw-button').addEventListener('click', () => {
        alert('Withdraw button clicked');
    });

    document.getElementById('message-support-button').addEventListener('click', () => {
        alert('Message support button clicked');
    });
});
