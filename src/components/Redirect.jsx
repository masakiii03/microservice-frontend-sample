export const Redirect = () => {
    const token = window.location.search;
    if (token !== "error") {
        localStorage.setItem("token", "Bearer " + token.slice(7));
    }

    window.location.href = "http://localhost:3000/home";
}