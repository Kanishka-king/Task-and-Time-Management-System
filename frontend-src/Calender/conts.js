
import Cookies from "js-cookie";
export const DAYS = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
console.log(Cookies.get('year'));
export const MOCKAPPS = [
  { date: new Date(Cookies.get('year'), Cookies.get('month')-1, Cookies.get('date')), title: Cookies.get('proname'), color: "#238783" },
  { date: new Date(Cookies.get('year'), Cookies.get('month1')-1, Cookies.get('date1')), title: Cookies.get('proname1'), color: "#238783" },
  { date: new Date(2022, 9, 6), title: "Backend Design", color: "#708898" },
  // { date: new Date(2022, 9, 10), title: "Integaration", color: "#047106" },
  { date: new Date(2022, 7, 23), title: "Testing", color: "#047106" },
  { date: new Date(2022, 9, 15), title: "Deploying", color: "#047106" },
  { date: new Date(2022, 9, 22), title: "Checking", color: "#047106" },
  { date: new Date(2022, 9, 25), title: "Final submittion of Project", color: "#047106" },
  { date: new Date(2022, 9, 3), title: "Front Part", color: "#371395" }
];
