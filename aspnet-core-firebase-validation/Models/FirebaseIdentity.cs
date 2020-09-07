namespace aspnet_core_firebase_validation.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;


    [Serializable, JsonObject]
    public class FirebaseIdentity
    {
        [JsonProperty("identities")]
        public Identities Identities { get; set; }
    }

    [Serializable, JsonObject]
    public class Identities
    {
        [JsonProperty("email")]
        public List<string> Email { get; set; }
    }
}
