import AsyncStorage from '@react-native-async-storage/async-storage';
import {Storage} from "./storage/storage";

const storage = new Storage(AsyncStorage)

export {storage}