import { HttpResponse, http } from "msw";// response resolver
// ========================================================================= //
// The resolver - an instruction on what to do when the request is intercepted. 
// Most often it will be a response in the form of mock data.
// One file - one Resolver \ Handler
// ========================================================================= //

export const PrototypeMockResolver = () => {  
	return HttpResponse.json([    
		{
			testData: "andromeda",
		},
	]);
};

export const PrototypeMockHandler = http.get("/api/posts", PrototypeMockResolver);

// ========================================================================= //