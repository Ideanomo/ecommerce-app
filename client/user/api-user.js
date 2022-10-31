const create = async (user) => {
    try {
        let response = await fetch("/api/users/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify(user),
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export { create };
