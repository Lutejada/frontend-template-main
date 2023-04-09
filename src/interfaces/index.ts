export interface Routes {
    name:string;
    path:string;
    subItem?:SubItem []
}
interface SubItem {
    name:string
    path:string;
  }