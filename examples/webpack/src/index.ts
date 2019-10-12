import "tailwindcss/utilities.css";

import { Tw } from "./tw";

const div = document.createElement("div");
div.innerHTML = "Hello World";
div.className = Tw().block().lgInline().$();
document.body.appendChild(div);
