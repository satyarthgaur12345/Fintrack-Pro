'use client'

import { useEffect, useState } from "react"

export function ReconciliationDashboard() {

  const [runs,setRuns] = useState<any[]>([])

  useEffect(()=>{

    const fetchRuns = async ()=>{

      const res = await fetch('/api/v1/reconcile')
      const data = await res.json()

      setRuns(data.runs ?? [])

    }

    fetchRuns()

    const interval = setInterval(fetchRuns,10000)

    return ()=>clearInterval(interval)

  },[])

  return (

    <div>

      <h2>Reconciliation Runs</h2>

      {runs.map(run=>(
        <div key={run.id}>
          {run.periodStart} - {run.periodEnd}
        </div>
      ))}

    </div>

  )
}