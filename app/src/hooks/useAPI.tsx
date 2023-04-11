import { useQuery } from "react-query";
import { pocketbase } from "../utils/pocketbase";
import { Record } from "pocketbase";

export interface TProject extends Record {
	url: string;
	name: string;
	description: string;
}

export interface TLinks extends Record {
	url: string;
	name: string;
}

export function useProjects() {
	const projects = useQuery("projects", async () => {
		return await pocketbase.collection("projects").getList<TProject>(1, 50, {});
	});

	return projects;
}

export function useLinks() {
	const links = useQuery("links", async () => {
		return await pocketbase.collection("links").getList<TLinks>(1, 50, {});
	});

	return links;
}
