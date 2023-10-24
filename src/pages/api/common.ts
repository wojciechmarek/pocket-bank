import { Server } from "socket.io";

export let loggedIds: string[] = [];
export let removedLoggedIds: string[] = [];

export let server: any = null;

export function initServer(s: any) {
  server = new Server(4815);
}
