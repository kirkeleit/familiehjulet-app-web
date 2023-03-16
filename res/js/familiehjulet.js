BASE_APP_URL="https://app.dev.familiehjulet.no"
//BASE_API_URL="https://api.dev.familiehjulet.no"
BASE_API_URL="http://localhost:3000"

function Authenticate(UserEmailAddress) {
    console.log("Starting authentication process for "+UserEmailAddress+"...")
    fetch(BASE_API_URL+"/users/login/", {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ EmailAddress: UserEmailAddress })
      })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            localStorage.setItem("LOGIN_TOKEN", data.LoginToken)
        });
}

