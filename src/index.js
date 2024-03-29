
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const list = document.body.querySelector(".cards")

for (let i = 0; i < data.length; i++) {
    const card = document.createElement("li")
    card.classList.add("card")

    const h2 = document.createElement("h2")
    h2.classList.add("card--title")
    h2.innerText = data[i].name.toUpperCase()
    card.append(h2)

    const img = document.createElement("img")
    img.setAttribute("width", 256)
    img.classList.add("card--img")
    img.setAttribute("src", data[i].sprites.other["official-artwork"].front_default)
    card.append(img)

    const ul = document.createElement("ul")
    ul.classList.add("card--text")

    const hp = document.createElement("li")
    hp.innerText = `HP: ${data[i].stats[0].base_stat}`
    ul.append(hp)

    const attack = document.createElement("li")
    attack.innerText = `ATTACK: ${data[i].stats[1].base_stat}`
    ul.append(attack)

    const defense = document.createElement("li")
    defense.innerText = `DEFENSE: ${data[i].stats[2].base_stat}`
    ul.append(defense)

    const sAttack = document.createElement("li")
    sAttack.innerText = `SPECIAL-ATTACK: ${data[i].stats[3].base_stat}`
    ul.append(sAttack)

    const sDefense = document.createElement("li")
    sDefense.innerText = `SPECIAL-DEFENSE: ${data[i].stats[4].base_stat}`
    ul.append(sDefense)

    const speed = document.createElement("li")
    speed.innerText = `SPEED: ${data[i].stats[5].base_stat}`
    ul.append(speed)

    card.append(ul)

    list.append(card)
}
