# react-json-form-test-task

UZDUOTIS SKIRTA PATIKRINTI POTENCIALU DARBUOTOJA

Intro:
react-json-schema padeda automatiskai mapinti back-end'o responsa (JSON) su react'o formom. ypac naudingai kai yra array, galima nesukt sau galvos, viskas automatiskai susimapina, zinoma yra ir drawback'u.

Pati biblioteka naudoja bootstrap'a (berots 3.3.7) po 'kapotu', ir automatiskai sugeneruoja formu fieldus. 

Si biblioteka naudojama visuose puslapiuose, istraukiau pvz is add user / edit user, ji siek tiek supaprastinau. 

Problema ir jos aprasymas:

Kartais reikia naudoti ne tik paprastus form fieldus (string, number, select), bet tenka naudoti ir date-picker. react-json-schema biblioteka turi integruota date-picker'i (https://rjsf-team.github.io/react-jsonschema-form/ -> date & time). Taciau sis date pickeris mums netinka del dvieju priezasciu:
a) Klientas naudojas Safari narsykle, ir jis ten is vis neveikia
b) Reikalinga lietuviu kalba

react-json-schema lib'as leidzia deti savo custom widgets, mes taip ir darom. Pasirinkom mum patinkanti react-datepicker'i (https://reactdatepicker.com/).

Uzduotis:

Viskas lengva, kai naudojamas 1 datepickeris viename komponente, bet yra puslapiu, kuriuose datepickeriu yra keli, musu atveju trys. 

Pagrindinis klausimas:

Kaip galima pagerinti koda, kad nebutu duplicate kodo atskiruose componentuose? (Ziureti paveiksliuka su duplicate code)

Papildomi:
- Noreciau matyti eslint naudojima
- Noriu proptype validacijos
- Noriu matyti veikianti boostrap (dabar kazko truksta?) 🙂 
- Noreciau matyti routerio panaudojima (navigacija tarp add ir edit components)

Bonus karmos taskai:
- Testai




