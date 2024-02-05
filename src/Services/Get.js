export default class Get{
    static async getWords() {
        try{
            const resp = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            return resp.json();
        }catch(e){
            console.error(e);
        }
    }
}