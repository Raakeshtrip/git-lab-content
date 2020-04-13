# Plots Review

## Instructions

* What kinds of plots match the datasets below?


```
# DATASET 1
gyms = ["Crunch", "Planet Fitness", "NY Sports Club", "Rickie's Gym"]
members = [49, 92, 84, 53]

# DATASET 2
x_lim = 2 * np.pi
x_axis = np.arange(0, x_lim, 0.1)
sin = np.sin(x_axis) 

# DATASET 3
gyms = ["Crunch", "Planet Fitness", "NY Sports Club", "Rickie's Gym"]
members = [49, 92, 84, 53]
x_axis = np.arange(0, len(gyms))
colors = ["yellowgreen", "red", "lightcoral", "lightskyblue"]
explode = (0, 0.05, 0, 0)

# DATASET 4
x_axis = np.arange(0, 10, 0.1)
times = [x * x + randint(0, ceiling(max(x_axis))) for x in x_axis]
```

* Create a plot for each of the datasets above, making certain to provide each chart with a title and labels
