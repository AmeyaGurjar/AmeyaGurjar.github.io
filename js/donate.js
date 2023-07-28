const btnResponse = {"paypalbtn":"https://paypal.me/AmeyMeow", "gitbtn":"https://github.com/sponsors/AmeyaGurjar", "buymecoffeebtn":"https://www.buymeacoffee.com/amey992004", "kofibtn":"https://ko-fi.com/ameyagurjar"};

const btnClick = (btn) => {
    window.location = btnResponse[btn.id];
};
const copyText = (text) => {
    navigator.clipboard.writeText(text.innerText);
}
