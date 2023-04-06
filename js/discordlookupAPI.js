import { member } from "./data.js";

const discordlookupAPI = {
    user: 'https://discordlookup.mesavirep.xyz/v1/user/',
    application: 'https://discordlookup.mesavirep.xyz/v1/application/',
}

const avatarSize = '?size=512';

const discordlookup = {
    u011: `${discordlookupAPI.user}${member.u011.discordUserID}`,
    u012: `${discordlookupAPI.user}${member.u012.discordUserID}`,
    u013: `${discordlookupAPI.user}${member.u013.discordUserID}`,
    u014: `${discordlookupAPI.user}${member.u014.discordUserID}`,
    u015: `${discordlookupAPI.user}${member.u015.discordUserID}`,
    u016: `${discordlookupAPI.user}${member.u016.discordUserID}`,
    u017: `${discordlookupAPI.user}${member.u017.discordUserID}`,
    u018: `${discordlookupAPI.user}${member.u018.discordUserID}`,
    u019: `${discordlookupAPI.user}${member.u019.discordUserID}`,
    u020: `${discordlookupAPI.user}${member.u020.discordUserID}`,
    u021: `${discordlookupAPI.user}${member.u021.discordUserID}`,
    u022: `${discordlookupAPI.user}${member.u022.discordUserID}`,
    u023: `${discordlookupAPI.user}${member.u023.discordUserID}`,
    u024: `${discordlookupAPI.user}${member.u024.discordUserID}`,
    u025: `${discordlookupAPI.user}${member.u025.discordUserID}`,
    u026: `${discordlookupAPI.user}${member.u026.discordUserID}`,
}

fetch(discordlookup.u011)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u011_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u011_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u012)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u012_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u012_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u013)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u013_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u013_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u014)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u014_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u014_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u015)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u015_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u015_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));
fetch(discordlookup.u016)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u016_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u016_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u017)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u017_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u017_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u018)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u018_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u018_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u019)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u019_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u019_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u020)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u020_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u020_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u021)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u021_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u021_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u022)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u022_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u022_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u023)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u023_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u023_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u024)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u024_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u024_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u025)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u025_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u025_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));

fetch(discordlookup.u026)
    .then(response => response.json())
    .then(data => {
        document.getElementById("u026_profile").style = `background-image: url("${data.avatar.link}${avatarSize}");`;
        document.getElementById("u026_dc_name").value = data.tag;
    })
    .catch(error => console.error(error));