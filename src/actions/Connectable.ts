import Vue from "vue";
import {api} from "@/config/api";
import {Endpoint} from "@/contracts/Endpoint";
import {ApiResponse} from "@/contracts/ApiResponse";

export class Connectable {
    protected static async request(endpoint: Endpoint): Promise<ApiResponse> {
        return await Vue.prototype.$axios[endpoint.method](`${api.base_url}${endpoint.uri}`, endpoint.params);
    }
}