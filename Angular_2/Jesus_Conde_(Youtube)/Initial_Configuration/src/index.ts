import { Component } from "@angular/core";
import { bootstrap } from "@angular/platform-browser-dynamic";

@Component(
{
	selector: "index",
	template: "<h1>{{ hello }}</div>"	
} )
class HelloAngularComponent
{
	hello: string;
	constructor()
	{
		this.hello = "Hello world!";
	}
}

bootstrap( HelloAngularComponent );