const day = 'friday';
switch (day) {
    case 'monday':
        console.log("monday plan's work 1");
        console.log("monday plan's work 2");
        console.log("monday plan's work 3");
        console.log("monday plan's work 4");
        break;
    case 'tuesday':
        console.log("tuesday plan's work 1");
        console.log("tuesday plan's work 2");
        break;
    case 'wednesday':
        console.log("wednesday plan's work 1");
        console.log("wednesday plan's work 2");
        break;
    case 'thursday':
    case 'friday':
        console.log("friday plan's work 1");
        console.log("friday plan's work 2");
        break;
    case 'saturday':
        console.log("spent time with family plan's work 1");
        console.log("spent time with family plan's work 2");
        break;
    case 'sunday':
        console.log("Enjoys");
        console.log("Enjoys");
        break;
    default:
        console.log("Not a valid day!");
        break;
};
if (day === 'monday') {
    console.log("monday plan's work 2");
    console.log("monday plan's work 3");
    console.log("monday plan's work 4");
} else if (day === 'tuesday') {
    console.log("tuesday plan's work 1");
    console.log("tuesday plan's work 2");
} else if (day === 'wednesday') {
    console.log("wednesday plan's work 1");
    console.log("wednesday plan's work 2");
} else if (day === 'thursday' || day === 'friday') {
    console.log("friday plan's work 1");
    console.log("friday plan's work 2");
} else if (day === 'saturday') {
    console.log("spent time with family plan's work 1");
    console.log("spent time with family plan's work 2");
} else if (day === sunday) {
    console.log("Enjoys");
    console.log("Enjoys");
} else {
    console.log("Not a valid day!");
}