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

    // ఎర్రర్ ఏమిటో బ్రౌజర్ లో చూడటానికి ఈ రెండు లైన్లు వాడండి
    console.log("Supabase Error:", error); 
    console.log("Supabase Data:", data);

    if (error || !data) {
        msg.innerText = "Invalid Login";
        return;
    }

    // యూజర్ డేటాని స్టోర్ చేయడం
    localStorage.setItem("user", JSON.stringify(data));
    
    // డ్యాష్‌బోర్డ్ లో పాప్-అప్ రాకుండా ఇక్కడే పేరు సేవ్ చేస్తున్నాం (డేటాబేస్ లో 'name' అనే కాలమ్ ఉంటే data.name వాడండి, లేదంటే username)
    localStorage.setItem("employeeName", data.username); 

    // రోల్ బట్టి డ్యాష్‌బోర్డ్‌కి పంపించడం
    if (data.role === "admin") {
        window.location.href = "dashboard.html"; // అడ్మిన్ కి వేరే పేజీ ఉంటే ఆ పేరు మార్చుకోండి
        return;
    }

    if (data.role === "section") {
        window.location.href = "dashboard.html"; // సెక్షన్ కి వేరే పేజీ ఉంటే ఆ పేరు మార్చుకోండి
        return;
    }

    if (data.role === "user") {
        window.location.href = "dashboard.html"; // మనం తయారు చేసిన మెయిన్ డ్యాష్‌బోర్డ్ పేజీ
        return;
    }

    msg.innerText = "Role Not Found";
}
