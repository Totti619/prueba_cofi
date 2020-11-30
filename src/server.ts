import app from "./app";

const main = async () => {
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log("Server listening... "));
};

main();
