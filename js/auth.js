async function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    if (!username || !password) {
        msg.innerText = "Enter Username and Password";
        return;
    }

    const { data, error } = await supabaseClient
        .from("users")
        .select("*")
        .eq("username", username)
        .eq("password", password)
        .single();

    if (error || !data) {
        msg.innerText = "Invalid Login";
        return;
    }

    // యూజర్ డేటాని స్టోర్ చేయడం
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("employeeName", data.username); 

    // రోల్ బట్టి డ్యాష్‌బోర్డ్‌కి పంపించడం
    if (data.role === "admin") {
        window.location.href = "user.html"; 
        return;
    }

    if (data.role === "section") {
        window.location.href = "user.html"; 
        return;
    }

    if (data.role === "user") {
        window.location.href = "user.html"; 
        return;
    }

    msg.innerText = "Role Not Found";
}
