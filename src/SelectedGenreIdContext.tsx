import { createContext, ReactNode, useState } from 'react'

interface SelectedGenreIdContextData {
    selectedGenreId: number
    handleClickButton: (id: number) => void
}

interface SelectedGenreIdProviderProps {
    children: ReactNode
}

export const SelectedGenreIdContext = createContext<SelectedGenreIdContextData>(
    {} as SelectedGenreIdContextData
    )

export function SelectedGenreIdProvider({children}: SelectedGenreIdProviderProps) {

    const [selectedGenreId, setSelectedGenreId] = useState(1);

    function handleClickButton(id: number) {
        setSelectedGenreId(id);
      }

    return (
        <SelectedGenreIdContext.Provider value={{selectedGenreId, handleClickButton}}>
            {children}
        </SelectedGenreIdContext.Provider>
    )
}