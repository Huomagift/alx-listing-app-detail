// Props for Card component
export interface CardProps {
  property: PropertyProps;
}

// Props for Button component
export interface ButtonProps {
  label: string
  styles?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'danger'
}

export interface PropertyProps {
  name: string,
    address: {
      state: string,
      city: string,
      country: string
    },
    rating: number,
    category: [string, string, string],
    price: number,
    offers: {
      bed: string,
      shower: string,
      occupants: string
    },
    image: string,
    discount: string,
    description?: string,
    reviews?: {
      name: string,
      avatar: string,
      rating: number,
      comment: string
    }[]
}
