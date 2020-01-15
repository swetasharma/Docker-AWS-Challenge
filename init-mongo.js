db.createUser(
    {
        user : "sweta",
        pwd : "sweta",
        roles : [
            {
                role : "dbOwner",
                db : "nginx_logs"
            }
        ]
    }
)
mongo
use nginx_logs
db.access.insertOne({ "name": "datacenter-3", "metadata": { "monitoring": { "enabled": "true" }, "limits": { "cpu": { "enabled": "false", "value": "450m" } } } })