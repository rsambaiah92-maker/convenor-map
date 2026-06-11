async function login() { // A ని స్మాల్ లెటర్ కి మార్చాను

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

    // ఎర్రర్ ఏమిటో బ్రౌజర్ లో చూడటానికి ఈ రెండు లైన్లు వాడండి
    console.log("Supabase Error:", error); 
    console.log("Supabase Data:", data);

    if (error || !data) {
        msg.innerText = "Invalid Login";
        return;
    }

    localStorage.setItem("user", JSON.stringify(data));

    if (data.role === "admin") {
        alert("Login Success");
        return;
    }

    if (data.role === "section") {
        alert("Login Success";
        return;
    }

    if (data.role === "user") {
        alert("Login Success";
        return;
    }

    msg.innerText = "Role Not Found";
}
