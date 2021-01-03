#Component lifecycle

##Creation
### Lifecycle
1. constuctor (props) -> 
2. static getDerivedStateFromProps(props, state)
3. render()
4. (render/update child component)
5. componentDidMount()

##Update (props & state change)
### Lifecycle
1. static getDerivedStateFromProps(props, state)
2. shouldComponentUpdate(nextProps, nextState)
3. render()
4. (update child component)
5. getSnapshotBeforeUpdate(prevProps, prevState)
6. componentDidUpdate()

### Changes
- convert Persons and Person component to **class** based

Reference  
https://dillinger.io