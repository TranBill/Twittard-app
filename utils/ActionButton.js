import { Ionicons,Feather } from "@expo/vector-icons";
import { twitterdarkcolor } from "./contansts";

const actions = [
    {
        color: twitterdarkcolor,
        name: "Tweet",
        position: 1,
        icon: <Feather name="twitter" size={22} color="white" />
    },
    {
        color: twitterdarkcolor,  
        name: "Mail",
        position: 2,
        icon: <Feather name="mail" size={22} color="white" />
    },
    {
        color: twitterdarkcolor,
        name: "Search",
        position: 3,
        icon: <Ionicons name="search" size={23} color="white" />
    },
    {
        color: twitterdarkcolor,
        name: "FaceBook",
        position: 4,
        icon:<Feather name="facebook" size={24} color="white" />
    }
  ];

export default actions;