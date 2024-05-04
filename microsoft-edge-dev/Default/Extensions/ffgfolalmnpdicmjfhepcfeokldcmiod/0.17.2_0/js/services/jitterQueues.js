(function() {
	define(['../app'], function(app) {
		var jitterQueues;
		jitterQueues = function() {
			this.jitters = {};

			this.average = function(server_id, data){
				if(!this.jitters[server_id]) return 0;
			    if(!data){
			      data = this.jitters[server_id].queue;
			    }
			      var sum = data.reduce(function(sum, value){
			        return sum + value;
			      }, 0);

			      var avg = sum / data.length;
			      return avg;
			};
			this.standardDeviation = function (server_id){
			  	if(!this.jitters[server_id]) return 0;
			      var avg = this.average(server_id, this.jitters[server_id].queue);

			      var squareDiffs = this.jitters[server_id].queue.map(function(value){
			        var diff = value - avg;
			        var sqrDiff = diff * diff;
			        return sqrDiff;
			      });

			      var avgSquareDiff = this.average(server_id, squareDiffs);

			      var stdDev = Math.sqrt(avgSquareDiff);
			      return stdDev;
			};

			this.getLength = function(server_id){
				if(!this.jitters[server_id]) return 0;
				return (this.jitters[server_id].queue.length - this.jitters[server_id].offset);
			}

			  // Returns true if the queue is empty, and false otherwise.
			this.isEmpty = function(server_id){
				if(!this.jitters[server_id]) return true;
			    return (this.jitters[server_id].queue.length == 0);
			}


			this.enqueue = function(server_id, item){
			  	if(!this.jitters[server_id]){
			  		this.jitters[server_id] = {};
			  		this.jitters[server_id].queue = [];
			  		this.jitters[server_id].offset = 0;
			  	}
			    this.jitters[server_id].queue.push(item);
			}


			  this.dequeue = function(server_id){
			  	if(!this.jitters[server_id]) return undefined;
			    // if the queue is empty, return immediately
			    if (this.jitters[server_id].queue.length == 0) return undefined;

			    // store the item at the front of the queue
			    var item = this.jitters[server_id].queue[this.jitters[server_id].offset];

			    // increment the offset and remove the free space if necessary
			    if (++ this.jitters[server_id].offset * 2 >= this.jitters[server_id].queue.length){
			      queue  = this.jitters[server_id].queue.slice(this.jitters[server_id].offset);
			      this.jitters[server_id].offset = 0;
			    }

			    // return the dequeued item
			    return item;

			  }


			this.peek = function(server_id){
			  	if(!this.jitters[server_id]) return undefined;
			    return (this.jitters[server_id].queue.length > 0 ? this.jitters[server_id].queue[this.jitters[server_id].offset] : undefined);
			}
			 
			this.clear = function(server_id){
				if(this.jitters[server_id]){
			  		this.jitters[server_id] = {};
			  		this.jitters[server_id].queue = [];
			  		this.jitters[server_id].offset = 0;
				}
			}
			this.clearAll = function(){
				this.jitters = {};
			}
			this.get = function(server_id, index){
			  	if(!this.jitters[server_id]) return undefined;
			    return (this.jitters[server_id].queue.length > 0 ? this.jitters[server_id].queue[index] : undefined);
			}

			return this
		};
		return app.service('jitterQueues', jitterQueues)
	})
}).call(this);