import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://keycloak.localhost/auth",
 realm: "kcalculator",
 clientId: "kcalculatorfront",
});

export default keycloak;