
App folder
	Public: html files kept here
	Data: JSON object stored here
	Routing: html routes, api routes

index.html
	view tables button (js/view)
	make reservation button (js/reserve)

view.html
	link to home
	make reservation link
	current reservation (pulls from object array name and index number +1)
	waiting list (if current list full)

reserve.html
	take user input (name, phone, email, unique ID)
	submit button

server.js
	runs node

package.json
	make sure to include Slacked file