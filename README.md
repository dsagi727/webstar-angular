# Webstar project - Star Wars App

## Alkalmazás:

Az alkalmazás lehetővé teszi a felhasználók számára, hogy jó vagy rossz karakterként játsszanak egy szimulált környezetben, a Star Wars franchise-hoz hű megjelenéssel és érzéssel.

## Technikai követelmények, előírások:

- Az alkalmazás Angular-alapú model-service-component architectúra jellemzi
- Az egy végpontkéréseket dedikált service-k szolgálják ki
- A dizájn SCSS preprocesszor mixin-ek és a BEM konvenció alkalmazásával készült
- A komponensekhez tartozó dizájnok szintén scss-ben kerültek meghatározásra
- A felület oldalaihoz csak belépést követően elérhetők

## Megjelenés:

- Az alkalmazás egy minimál fejléc és lábléccel rendelkezik, amelyen a navigáció és az alkalmazásból való kijelentkezés is történik
- Az alkalmazás nem reszponzív a képernyő széllessége rögzítve van minimum 1024px-en
- Az alkalmazott színeket, betűtípusokat, mixineket és az előre meghatárzott stílus osztályokat a styles/base mappa tárolja, és a main.scss fájl gyűjti össze.

## Alkalmazás kipróbálása és függőségek

Az alkalmazásohoz az általános npm csomagon kívűl ngx-toaster lett felhasználva a hibakezelés megjelenítésére.

1. Először forkolni kell az adott GitHub repository tartalmát.
   https://github.com/dsagi727/webstar.git

2. A kliensgépen le kell klónozni Forkolt repository tartalmát az alábbo terminál parancs segítségével `git clone https://github.com/dsagi727/webstar.git`

3. Ha a kliensgépen nincs még fent az Angular keretrendszer, akkor azt telepíteni szükséges az alábbi terminál parancsal `npm i -g @angular/cli`

4. Az alkalmazás törzsében ./star-wars-app könyvtárban állva a terminálon telepítsük a node package manager csomagot, ami telepíti a futtatáshoz szükséges összes függőségeket. A terminálban adjuk ki az `npm i -s` parancsot.

5. Miután települt a npm könyvtár a projekten belül, tehát a ./star-wars-app könyvtáron belül állva a terminálon adjuk ki az `ng s -o` parancsot, amely a kliensgép böngészőjében egy új lapon a localhot:4200 megnyitja az alkalmazást.

6. A projekthez kapott API applicationId biztonsági okokból a projekt src/environment mappájában egy key.ts fájlban exportálható string változóban került meghatározásra. A sikeres API azonosításhoz, készíts egy key.ts fájlt az src/environment mappájában és másold be az alábbi kódot egy valid applicationId-val. `export const appId_value = "VALID_ID";`

_Megjegyzés_:
A belépéshez egy érvényes e-mail-cím és jelszó páros (példa):
|E-mail | Jelszó |
| ------ | ------ |
|frontend@webstar.hu|s9@:8BpuC]\*Q,e,A|
