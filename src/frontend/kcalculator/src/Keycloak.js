import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8090/auth",
 realm: "kcalculator",
 clientId: "kcalculator",
});

export default keycloak;