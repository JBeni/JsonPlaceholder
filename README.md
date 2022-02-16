# JsonPlaceholder

* Instructions
	* Server-side
		* Visual Studio Community 2022
		* .Net 6 with C# 10
		* The Web API uses the minimal API concept

	* Client-side
		* Visual Studio Code
		* React latest version with Node v16.13.2, npm v8.1.2 (The IDE was already configured for this settings)
		* The endpoint for the Web API is stored in the Services/ApiConfiguration file

	* WEB API Test
		* I made the routes for todos and posts dynamically, you can retrieve different number of items,
		for example, /posts/30 will return only the first 30 elements from all the items
		* Routes
			* Get user by id: /users/{id}
			* Get posts with limit: /posts/{numberOfPosts}
			* Get todos with limit: /todos/{numberOfTodos}

	* REACT CLIENT
		* Calling directly the JsonPlaceholder API, the endpoint is stored in services/ApiConfiguration file.
		* The requests made with axios are stored in services/endpoint.service

	* Program Commands
		* run npm install then npm start for the react client

