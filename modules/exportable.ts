
// export the class as module
export class StringUtilities {
      getLength(str:string): number {
          return str.length;
      }  
      changeCase(c:string, str:string): string {
        switch(c) {
            case 'U':
                str= str.toUpperCase();
                return str;
                break;
            case 'L':
                str = str.toLowerCase();
                return str;
                break;    
        }   
      }
}