import fs from 'fs';


class Levit {
    constructor(){
        self.graph = new Map();
    }

    fromFile(filepath) {
        let data = fs.readFileSync(filepath, 'utf-8');
        if(data.length === 0) {
            throw "File is not found";
        }

        data.split('\n').forEach(line => {
            let items = line.split(' ');
            if (items.length > 0) {
                self.graph[items[0]] = items.slice(1,items.length);
            }
        });
    }

    fromDict(dict) {
        this.graph = dict;
    }

    run(v1, v2) {
        let queue = [];
        if(self.graph.size == 0) {
            throw "Graph is empty";
        }

        let distance = new Map();
        distance.set(v1,0);
        let q = [];
        q.push(v1);
        let id = new Map();
        while(queue.length > 0) {
            let v = q[0]
            q.shift();
            for(let i = 0;i < self.graph.size();++i) {
                let distto = self.graph[v][i];
                let length = 1;
                if(distance.get(distto) > distance.get(v) + length) {

                }
            }
        }
    }
}
