let token = '6641ffeea1615673ce7f07ca781abedc47caecf1ddbf7c08';


export const server_calls = {
    get: async () => {
        const response = await fetch(`https://drone-inventory-new.herokuapp.com/api/drones`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },

    create: async(data:any = {}) => {
        const response = await fetch('https://drone-inventory-new.herokuapp.com/api/drones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to post new data to the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://drone-inventory-new.herokuapp.com/api/drones/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to post new data to the server')
        }
    },

    delete: async (id: string) => {
        const response = await fetch(`https://drone-inventory-new.herokuapp.com/api/drones/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}
