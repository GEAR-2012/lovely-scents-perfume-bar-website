/* Last modified 24 November 2022 by Sandor Tudja in Kemnay, Scotland */
/* © Gear Web development 2022 */
/*
  This script produces the year data to the copyright information.
*/

const copyright_year = document.querySelector("#copyright-year");
const today = new Date();

copyright_year.textContent = today.getFullYear();
