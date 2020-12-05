const persons = Object.freeze([ //Don't edit this array
{
userId: 1,
name: "Teppo Testaaja",
dateOfBirth: new Date("1959-01-01"),
email: "teppo.testaaja@buutti.com"
},
{
userId: 2,
name: "Tessa Testaaja",
dateOfBirth: new Date("1981-01-01"),
email: "tessa.testaaja@buutti.com"
},
{
userId: 3,
name: "Teuvo Testaaja",
dateOfBirth: new Date("1989-05-05"),
email: "teuvo.testaaja@buutti.com"
},
{
userId: 4,
name: "Outi Ohjelmoija",
dateOfBirth: new Date("1972-06-06"),
email: "outi.ohjelmoija@buutti.com"
},
{
userId: 5,
name: "Olli Ohjelmoija",
dateOfBirth: new Date("1989-05-05"),
email: "olli.ohjelmoija@buutti.com"
},
{
userId: 6,
name: "Teppo Ohjelmoija",
dateOfBirth: new Date("1980-02-02"),
email: "teppo.ohjelmoija@buutti.com"
}]);
const exportable = {
"persons": persons,
}
module.exports = exportable;
