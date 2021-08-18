let token = 'e9982b25f0147430867d479dd56f2e13ba17351c4f8c126e';


export const server_calls = {
    get: async () => {
        const response = await fetch(`https://drone-inventory-new.herokuapp.com/api/drones`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        //Checking to make sure we got some data back...
        if (!response.ok){
            throw new Error('Failed to fetch data from the server!')
        }

        return await response.json()

    },
    create: async (data:any = {}) => {
        const response = await fetch('https://drone-inventory-new.herokuapp.com/api/drones',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create a Drone in the Database!')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) =>{
        const response = await fetch(`https://drone-inventory-new.herokuapp.com/api/drones/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body:JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Did not update Drone - please try again!')
        }
    },
    delete: async(id:string) =>{
        const response = await fetch(`https://drone-inventory-new.herokuapp.com/api/drones/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Something went wrong here...')
        }
    }

}