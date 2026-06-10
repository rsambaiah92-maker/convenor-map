async function login() {

const username =
document.getElementById("username").value.trim();

const password =
document.getElementById("password").value.trim();

const msg =
document.getElementById("msg");

if (!username || !password) {

msg.innerText =
"Enter Username and Password";

return;
}

const { data, error } =
await supabaseClient
.from("users")
.select("*")
.eq("username", username)
.eq("password", password)
.single();

if (error || !data) {

msg.innerText =
"Invalid Login";

return;
}

localStorage.setItem(
"user",
JSON.stringify(data)
);

if (data.role === "admin") {

window.location =
"admin.html";

return;
}

if (data.role === "section") {

window.location =
"section.html";

return;
}

if (data.role === "user") {

window.location =
"user.html";

return;
}

msg.innerText =
"Role Not Found";
}
